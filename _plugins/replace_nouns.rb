module Jekyll
  module ReplaceNounsFilter
    def replace_nouns(content, nouns)
      return content if nouns.nil? || nouns.empty?
      
      # First, temporarily protect URLs
      url_placeholders = {}
      content = content.gsub(%r{https?://[^\s<>"]+}) do |url|
        placeholder = "URL_PLACEHOLDER_#{url_placeholders.length}"
        url_placeholders[placeholder] = url
        placeholder
      end
      
      # Replace nouns
      nouns.each do |noun|
        noun_str = Regexp.escape(noun.to_s)
        content = content.gsub(/(?<=^|\W)#{noun_str}(?=$|\W)/) do |match|
          "<em>#{match}</em>"
        end
      end
      
      # Restore URLs
      url_placeholders.each do |placeholder, url|
        content = content.gsub(placeholder, url)
      end
      
      content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceNounsFilter)