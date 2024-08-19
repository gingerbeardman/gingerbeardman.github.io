module Jekyll
  module ReplaceNounsFilter
    def replace_nouns(content, nouns)
      return content if nouns.nil? || nouns.empty?
      nouns.each do |noun|
        content = content.gsub(/\b#{Regexp.escape(noun)}\b/, "<em>#{noun}</em>")
      end
      content
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceNounsFilter)