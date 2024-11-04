module Jekyll
  module ReplaceNounsFilter
    def replace_nouns(content, nouns)
      return content if nouns.nil? || nouns.empty?
      
      Jekyll.logger.info "ReplaceNounsFilter:", "Starting replacement for nouns: #{nouns.join(', ')}"
      
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
        Jekyll.logger.info "ReplaceNounsFilter:", "Protected URL: #{match} → #{key}"
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
          Jekyll.logger.info "ReplaceNounsFilter:", "Protected YAML front matter"
        end
      end
      
      # Protect code blocks
      protected_content = protected_content.gsub(/```.*?```/m) do |match|
        key = "[[CODE#{protection_count}]]"
        protections[key] = match
        protection_count += 1
        Jekyll.logger.info "ReplaceNounsFilter:", "Protected code block"
        key
      end
      
      # Replace nouns
      nouns.each do |noun|
        noun_str = Regexp.escape(noun.to_s)
        # Look for the noun with word boundaries, excluding already wrapped em tags
        protected_content = protected_content.gsub(/(?<!<em>)(?<=^|\s|\(|>)#{noun_str}(?=$|\s|\)|<)(?!<\/em>)/i) do |match|
          emphasized = "<em>#{match}</em>"
          Jekyll.logger.info "ReplaceNounsFilter:", "Replacing noun: #{match} → #{emphasized}"
          emphasized
        end
      end
      
      # Restore protected content in reverse order
      protections.each do |key, value|
        protected_content = protected_content.gsub(key, value)
        Jekyll.logger.info "ReplaceNounsFilter:", "Restored protected content: #{key}"
      end
      
      protected_content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceNounsFilter)