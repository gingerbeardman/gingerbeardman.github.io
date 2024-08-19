# file: _plugins/cdn_img.rb
module Jekyll
  class CDNImageTransformer < Generator
    def generate(site)
      @site = site
      @cdn_url = "https://cdn.gingerbeardman.com"

      site.pages.each { |page| process(page) }
      site.posts.docs.each { |post| process(post) }
    end

    def process(item)
      item.content = item.content.gsub(/!\[(.*?)\]\((\/images\/.*?)\)/) do |match|
        alt_text = $1
        image_path = $2
        "![#{alt_text}](#{@cdn_url}#{image_path})"
      end
    end
  end
end
