module Jekyll
  module ReplaceNounsFilter
    def replace_nouns(content, nouns)
      return content if nouns.nil? || nouns.empty?
      nouns.each do |noun|
        noun_str = noun.to_s
        content = content.gsub(/\b#{Regexp.escape(noun_str)}\b/, "<em>#{noun_str}</em>")
      end
      content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceNounsFilter)