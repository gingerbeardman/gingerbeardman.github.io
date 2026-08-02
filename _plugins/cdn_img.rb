# file: _plugins/cdn_img.rb
module Jekyll
  class CDNImageTransformer < Generator
    def generate(site)
      @site = site
      @cdn_url = "https://cdn.gingerbeardman.com"

      # Check if we're in production environment
      if ENV['JEKYLL_ENV'] == 'production'
        @site.pages.each { |page| process(page) }
        @site.posts.docs.each { |post| process(post) }
      end
    end

    def process(item)
      item.content = item.content.gsub(/!\[(.*?)\]\((\/images\/[^\s)]*)/) do |match|
        alt_text = $1
        image_path = $2
        "![#{alt_text}](#{@cdn_url}#{image_path}"
      end

      item.content = item.content.gsub(/(src|srcset)=(["'])(\/images\/[^"']*)\2/) do |match|
        attribute = $1
        quote = $2
        image_path = $3
        "#{attribute}=#{quote}#{@cdn_url}#{image_path}#{quote}"
      end
    end
  end
end
