# _plugins/lite_yt_embed.rb

module Jekyll
  class YouTubeEmbed < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input.strip.split(' ')
    end

    def render(context)
      id = @input[0]
      aspect_ratio = @input[1] || '16/9'
      start_time = @input[2]&.gsub('@', '') || '0'

      <<~HTML
        <lite-youtube style="aspect-ratio:#{aspect_ratio};" videoid="#{id}" params="start=#{start_time}&modestbranding=2"></lite-youtube>
      HTML
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTubeEmbed)