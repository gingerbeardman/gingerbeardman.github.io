require 'nokogiri'
require 'json'
require 'open-uri'

module Jekyll
  class OpenSearchSuggestions < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @search_term = text.strip
    end

    def render(context)
      site = context.registers[:site]
      
      # Use the site's URL from _config.yml
      site_url = site.config['url']
      sitemap_url = "#{site_url}/sitemap.xml"
      
      debug_info = {
        search_term: @search_term,
        sitemap_url: sitemap_url
      }
      
      begin
        sitemap = URI.open(sitemap_url).read
        doc = Nokogiri::XML(sitemap)
        
        urls = doc.xpath('//xmlns:url/xmlns:loc').map(&:text)
        debug_info[:total_urls] = urls.length
        
        matches = urls.select { |url| url.downcase.include?(@search_term.downcase) }
        debug_info[:matches] = matches
        
        suggestions = matches.map do |url|
          title = url.split('/').last.gsub('-', ' ').capitalize
          [title, url]
        end
        
        result = [@search_term, suggestions.map(&:first), suggestions.map(&:last), debug_info]
        result.to_json
      rescue OpenURI::HTTPError => e
        { error: "Failed to fetch sitemap: #{e.message}", debug_info: debug_info }.to_json
      rescue StandardError => e
        { error: "An error occurred: #{e.message}", debug_info: debug_info }.to_json
      end
    end
  end
end

Liquid::Template.register_tag('opensearch_suggestions', Jekyll::OpenSearchSuggestions)