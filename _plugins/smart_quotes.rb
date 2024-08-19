# file: _plugins/smart_quotes.rb
module Jekyll
  class SmartQuotesTitleTransformer < Generator
    def generate(site)
      site.posts.docs.each do |post|
        original_title = post.data['title']
        if original_title
          smart_title = convert_to_smart_quotes(original_title)
          if original_title != smart_title
            post.data['title'] = smart_title
          end
        end
      end
    end

    private

    def convert_to_smart_quotes(text)
      # Replace double quotes
      text = text.gsub(/"([^"]*)"/, '“\\1”')
      
      # Replace pairs of single quotes/apostrophes
      text = text.gsub(/'([^']*)'/, '‘\\1’')
      
      # Replace remaining apostrophes
      text = text.gsub(/(\w)'(\w)/, '\\1’\\2')
      
      text
    end
  end
end