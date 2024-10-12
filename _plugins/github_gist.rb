module Jekyll
  class GistTag < Liquid::Tag
    DEFAULT_USERNAME = "gingerbeardman"

    def initialize(tag_name, gist_id, tokens)
      super
      @gist_id = gist_id.strip
    end

    def render(context)
      if @gist_id.empty?
        return "Error: Gist ID is required"
      end

      username, gist_id = @gist_id.split('/')
      if gist_id.nil?
        gist_id = username
        username = DEFAULT_USERNAME
      end

      gist_url = "https://gist.github.com/#{username}/#{gist_id}"
      script_url = "https://gist.github.com/#{username}/#{gist_id}.js"

      <<-HTML
<noscript><p><a href="#{gist_url}">View the source code as a Gist</a></p></noscript>
<script src="#{script_url}"></script>
      HTML
    end
  end
end

Liquid::Template.register_tag('gist', Jekyll::GistTag)