import * as pagefind from "/pagefind/pagefind.js";

document.addEventListener("DOMContentLoaded", async function () {
  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function debounce(fn, delay) {
    let timeoutId = null;
    return function (...args) {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn(...args), delay);
    };
  }

  function normalizeResultTitle(title) {
    return (title || "").replace(/\s*♥\s*$/, "").trim();
  }

  const resultsEl = document.getElementById("search-results");
  const queryEl = document.getElementById("query");
  const clearEl = document.getElementById("clear-query");
  if (!resultsEl || !queryEl || !clearEl) return;

  const params = new URLSearchParams(window.location.search);
  const sortMode = params.get("sort") === "oldest" ? "oldest" : "newest";
  const viewMode = params.get("view") === "simple" ? "simple" : "full";
  const orderMode = params.get("order") === "rank" ? "rank" : "date";
  const initialQuery = (params.get("q") || "").trim();

  const buildUrl = (query, sort, view, order) => {
    const next = new URLSearchParams();
    if (query) next.set("q", query);
    if (sort !== "newest") next.set("sort", sort);
    if (view !== "full") next.set("view", view);
    if (order === "rank") next.set("order", "rank");
    const qs = next.toString();
    return qs ? "/search/?" + qs : "/search/";
  };

  const buildLink = (query, nextSort, nextView, nextOrder) => {
    return buildUrl(query, nextSort, nextView, nextOrder);
  };

  const updateClearVisibility = () => {
    clearEl.style.display = queryEl.value.trim() ? "inline-block" : "none";
  };

  function parseQuery(rawQuery) {
    const tokens = rawQuery.match(/"[^"]+"|\S+/g) || [];
    const includeTokens = [];
    const excludeTerms = [];

    for (const token of tokens) {
      if (token.startsWith("-") && token.length > 1) {
        const term = token.slice(1).trim();
        if (term) excludeTerms.push(term);
      } else {
        includeTokens.push(token);
      }
    }

    return {
      includeQuery: includeTokens.join(" ").trim(),
      excludeTerms
    };
  }

  async function runSearch(rawQuery) {
    const query = rawQuery.trim();
    updateClearVisibility();

    const nextUrl = buildUrl(query, sortMode, viewMode, orderMode);
    history.replaceState({}, "", nextUrl);
    document.title = query
      ? 'Searching "' + query + '" ⌘I  Get Info'
      : "Search ⌘I  Get Info";

    if (!query) {
      resultsEl.innerHTML = "";
      return;
    }

    try {
      const parsed = parseQuery(query);
      if (!parsed.includeQuery) {
        resultsEl.innerHTML = "<p>Add a search term before exclusions, for example: pixel -popular</p>";
        return;
      }

      const search = await pagefind.search(parsed.includeQuery);
      const excludedIds = new Set();

      if (parsed.excludeTerms.length) {
        const exclusionResults = await Promise.all(
          parsed.excludeTerms.map((term) => pagefind.search(term))
        );
        for (const exclusion of exclusionResults) {
          for (const result of exclusion.results) {
            excludedIds.add(result.id);
          }
        }
      }

      const filteredResults = search.results.filter((result) => !excludedIds.has(result.id));
      const items = await Promise.all(
        filteredResults.map(async (result) => {
          const data = await result.data();
          return {
            url: data.url,
            title: normalizeResultTitle((data.meta && data.meta.title) ? data.meta.title : data.url),
            date: (data.meta && data.meta.date) ? data.meta.date : "",
            readTime: (data.meta && data.meta.read_time) ? data.meta.read_time : "",
            featured: (data.meta && data.meta.featured) ? data.meta.featured === "true" : false,
            excerpt: data.excerpt || ""
          };
        })
      );

      if (!items.length) {
        resultsEl.innerHTML = "<p>Zero, zilch, zip, nada, nothing.</p>";
        return;
      }

      // Date order toggle (newest/oldest) vs default Pagefind ranking.
      if (orderMode === "date") {
        items.sort((a, b) => {
          return sortMode === "oldest"
            ? a.url.localeCompare(b.url)
            : b.url.localeCompare(a.url);
        });
      }

      const controlLabel = (label, active, href) => {
        if (active) {
          return '<span class="c-search-control c-search-control--active">' + label + "</span>";
        }
        return '<a class="c-search-control" href="' + href + '">' + label + "</a>";
      };

      const newestOrderLabel = controlLabel(
        orderMode === "date" && sortMode === "newest" ? "newest first" : "switch to newest",
        orderMode === "date" && sortMode === "newest",
        buildLink(query, "newest", viewMode, "date")
      );
      const oldestOrderLabel = controlLabel(
        orderMode === "date" && sortMode === "oldest" ? "oldest first" : "switch to oldest",
        orderMode === "date" && sortMode === "oldest",
        buildLink(query, "oldest", viewMode, "date")
      );
      const bestMatchOrderLabel = controlLabel(
        orderMode === "rank" ? "best match" : "switch to best match",
        orderMode === "rank",
        buildLink(query, sortMode, viewMode, "rank")
      );
      const viewToggleLabel = viewMode === "simple"
        ? controlLabel("show detailed", false, buildLink(query, sortMode, "full", orderMode))
        : controlLabel("show simple", false, buildLink(query, sortMode, "simple", orderMode));

      const list = items.map((item) => {
        const metadata = [item.date, item.readTime].filter(Boolean).join("  •  ");
        if (viewMode === "simple") {
          return (
            '<li class="c-search-result c-search-result--simple">' +
              '<a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.url) + "</a>" +
            "</li>"
          );
        }
        return (
          '<li class="c-search-result"><div class="c-search-result__inner">' +
            '<div class="c-search-result__title"><a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + "</a>" +
            (item.featured ? '<span class="c-search-result__fave" aria-label="Featured"> ♥</span>' : "") +
            "</div>" +
            (metadata ? '<div class="c-search-result__meta">' + escapeHtml(metadata) + "</div>" : "") +
            '<div class="c-search-result__excerpt">' + item.excerpt + "</div>" +
          "</div></li>"
        );
      }).join("");

      const listClass = viewMode === "simple"
        ? "c-search-results c-search-results--simple"
        : "c-search-results c-search-results--full";
      const resultLabel = items.length === 1 ? "result" : "results";
      resultsEl.innerHTML =
        "<p>" + items.length + " " + resultLabel + " (" + newestOrderLabel + ", " + oldestOrderLabel + ", " + bestMatchOrderLabel + "; " + viewToggleLabel + "):</p><ul class=\"" + listClass + "\">" + list + "</ul>";
    } catch (error) {
      resultsEl.innerHTML = "<p>Search failed to load.</p>";
    }
  }

  const debouncedSearch = debounce((value) => {
    runSearch(value);
  }, 180);

  queryEl.addEventListener("input", () => {
    debouncedSearch(queryEl.value);
  });

  clearEl.addEventListener("click", () => {
    queryEl.value = "";
    queryEl.focus();
    runSearch("");
  });

  queryEl.value = initialQuery;
  updateClearVisibility();
  runSearch(initialQuery);
});
