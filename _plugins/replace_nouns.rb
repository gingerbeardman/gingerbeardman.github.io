module Jekyll
  module ReplaceNounsFilter
    def replace_nouns(content, nouns)
      return content if nouns.nil? || nouns.empty?
      nouns.each do |noun|
        noun_str = Regexp.escape(noun.to_s)
        content = content.gsub(/(?<=^|\W|\/)#{noun_str}(?=$|\W|\/)/) do |match|
          if match.start_with?('/') || match.end_with?('/')
            match  # Don't replace if it starts or ends with a slash
          else
            "<em>#{match}</em>"
          end
        end
      end
      content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceNounsFilter)