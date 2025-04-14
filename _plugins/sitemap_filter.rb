module Jekyll
  class SitemapFilter < Generator
    safe true
    priority :low

    def generate(site)
      site.posts.docs.each do |post|
        if post.data['published'] == 'private' || post.data['published'] == false
          post.data['sitemap'] = false
        end
      end
    end
  end
end