require 'nokogiri'
require 'json'
require 'open-uri'

module Jekyll
  class OpenSearchSuggestionsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      sitemap_url = "#{site.config['url']}/sitemap.xml"
      
      begin
        sitemap = URI.open(sitemap_url).read
        doc = Nokogiri::XML(sitemap)
        
        urls = doc.xpath('//xmlns:url/xmlns:loc').map(&:text)
        
        suggestions = urls.map do |url|
          title = url.split('/').last.gsub('-', ' ').capitalize
          [title, url]
        end

        site.pages << OpenSearchSuggestionsPage.new(site, site.source, "", "opensearch.json", suggestions)
      rescue OpenURI::HTTPError => e
        Jekyll.logger.error "OpenSearchSuggestionsGenerator:", "Failed to fetch sitemap: #{e.message}"
      rescue StandardError => e
        Jekyll.logger.error "OpenSearchSuggestionsGenerator:", "An error occurred: #{e.message}"
      end
    end
  end

  class OpenSearchSuggestionsPage < Page
    def initialize(site, base, dir, name, suggestions)
      @site = site
      @base = base
      @dir  = dir
      @name = name

      self.process(name)
      self.data = {}

      self.content = <<-EOS
function getOpenSearchSuggestions(query) {
  query = query.toLowerCase();
  var suggestions = #{suggestions.to_json};
  var matches = suggestions.filter(function(item) {
    return item[0].toLowerCase().includes(query) || item[1].toLowerCase().includes(query);
  });
  return [query, matches.map(function(item) { return item[0]; }), matches.map(function(item) { return item[1]; })];
}
EOS
    end
  end
end