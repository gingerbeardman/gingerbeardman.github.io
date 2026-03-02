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

  const resultsEl = document.getElementById("search-results");
  const queryEl = document.getElementById("query");
  if (!resultsEl || !queryEl) return;

  const params = new URLSearchParams(window.location.search);
  const query = (params.get("q") || "").trim();
  const sortMode = params.get("sort") === "oldest" ? "oldest" : "newest";
  const viewMode = params.get("view") === "simple" ? "simple" : "full";
  const effectiveSortMode = viewMode === "simple" ? "newest" : sortMode;
  if (!query) return;

  queryEl.value = query;
  document.title = 'Searching "' + query + '" ⌘I  Get Info';

  try {
    const search = await pagefind.search(query);
    const items = await Promise.all(
      search.results.map(async (result) => {
        const data = await result.data();
        return {
          url: data.url,
          title: (data.meta && data.meta.title) ? data.meta.title : data.url,
          date: (data.meta && data.meta.date) ? data.meta.date : "",
          readTime: (data.meta && data.meta.read_time) ? data.meta.read_time : "",
          excerpt: data.excerpt || ""
        };
      })
    );

    if (!items.length) {
      resultsEl.innerHTML = "<p>Zero, zilch, zip, nada, nothing.</p>";
      return;
    }

    // Approximate date ordering using post URLs.
    items.sort((a, b) => {
      return effectiveSortMode === "oldest"
        ? a.url.localeCompare(b.url)
        : b.url.localeCompare(a.url);
    });

    const buildLink = (nextSort, nextView) => {
      const next = new URLSearchParams();
      next.set("q", query);
      if (nextSort !== "newest") next.set("sort", nextSort);
      if (nextView !== "full") next.set("view", nextView);
      return "/search/?" + next.toString();
    };

    const controlLabel = (label, active, href) => {
      if (active) {
        return '<span class="c-search-control c-search-control--active">' + label + "</span>";
      }
      return '<a class="c-search-control" href="' + href + '">' + label + "</a>";
    };

    const newestActive = viewMode !== "simple" && sortMode === "newest";
    const oldestActive = viewMode !== "simple" && sortMode === "oldest";
    const simpleActive = viewMode === "simple";

    const newestLabel = controlLabel("newest first", newestActive, buildLink("newest", viewMode));
    const oldestLabel = controlLabel("oldest first", oldestActive, buildLink("oldest", viewMode));
    const viewToggleLabel = simpleActive
      ? controlLabel("detailed results", false, buildLink(sortMode, "full"))
      : controlLabel("simple results", false, buildLink("newest", "simple"));

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
          '<div class="c-search-result__title"><a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + "</a></div>" +
          (metadata ? '<div class="c-search-result__meta">' + escapeHtml(metadata) + "</div>" : "") +
          '<div class="c-search-result__excerpt">' + item.excerpt + "</div>" +
        "</div></li>"
      );
    }).join("");

    const listClass = viewMode === "simple"
      ? "c-search-results c-search-results--simple"
      : "c-search-results c-search-results--full";
    resultsEl.innerHTML =
      "<p>" + items.length + " results (" + newestLabel + ", " + oldestLabel + "; " + viewToggleLabel + "):</p><ul class=\"" + listClass + "\">" + list + "</ul>";
  } catch (error) {
    resultsEl.innerHTML = "<p>Search failed to load.</p>";
  }
});
