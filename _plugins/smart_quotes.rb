# file: _plugins/smart_quotes.rb
module Jekyll
  class SmartQuotesTitleTransformer < Generator
    def generate(site)
      (site.posts.docs + site.pages).each do |doc|
        original_title = doc.data['title']
        next unless original_title

        smart_title = convert_to_smart_quotes(original_title)
        doc.data['title'] = smart_title if original_title != smart_title
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