module Jekyll
  module ReplaceNounsFilter
    def replace_nouns(content, nouns)
      return content if nouns.nil? || nouns.empty?
      
      # First protect special patterns
      protected_content = content.dup
      
      # Store protected sections
      protections = {}
      protection_count = 0
      
      # Protect URLs with protocol
      protected_content = protected_content.gsub(%r{https?://[^\s<>"]+}) do |match|
        key = "[[URL#{protection_count}]]"
        protections[key] = match
        protection_count += 1
        key
      end
      
      # Protect YAML front matter
      if protected_content.start_with?("---")
        if yaml_match = protected_content.match(/\A(---\s*.*?\s*---)/m)
          yaml_content = yaml_match[1]
          key = "[[YAML#{protection_count}]]"
          protections[key] = yaml_content
          protection_count += 1
          protected_content.sub!(yaml_content, key)
        end
      end
      
      # Protect code blocks
      protected_content = protected_content.gsub(/```.*?```/m) do |match|
        key = "[[CODE#{protection_count}]]"
        protections[key] = match
        protection_count += 1
        key
      end
      
      # Replace nouns - using word boundaries and handling HTML entities
      nouns.each do |noun|
        # Convert & to &amp; in the noun for HTML matching
        noun_html = noun.to_s.gsub('&', '&amp;')
        noun_str = Regexp.escape(noun_html)
        protected_content = protected_content.gsub(/(?<!<em>)\b#{noun_str}\b(?!<\/em>)/) do |match|
          "<em>#{match}</em>"
        end
      end
      
      # Restore protected content in reverse order
      protections.each do |key, value|
        protected_content = protected_content.gsub(key, value)
      end
      
      protected_content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceNounsFilter)