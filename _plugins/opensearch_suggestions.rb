require 'nokogiri'
require 'json'

module Jekyll
  class OpenSearchSuggestions < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @search_term = text.strip
    end

    def render(context)
      site = context.registers[:site]
      sitemap_path = File.join(site.source, 'sitemap.xml')
      
      if File.exist?(sitemap_path)
        sitemap = File.read(sitemap_path)
        doc = Nokogiri::XML(sitemap)
        
        urls = doc.xpath('//xmlns:url/xmlns:loc').map(&:text)
        
        matches = urls.select { |url| url.downcase.include?(@search_term.downcase) }
        
        suggestions = matches.map do |url|
          title = url.split('/').last.gsub('-', ' ').capitalize
          [title, url]
        end
        
        result = [@search_term, suggestions.map(&:first), suggestions.map(&:last)]
        result.to_json
      else
        '[]'
      end
    end
  end
end

Liquid::Template.register_tag('opensearch_suggestions', Jekyll::OpenSearchSuggestions)