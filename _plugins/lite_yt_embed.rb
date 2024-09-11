# _plugins/lite_yt_embed.rb

module Jekyll
  class LiteYouTubeEmbed < Liquid::Tag
    DEFAULT_WIDTH = 740
    DEFAULT_HEIGHT = 416
    DEFAULT_PARAMS = { 'modestbranding' => '2' }

    def initialize(tag_name, input, tokens)
      super
      parts = input.split(' ')
      @video_id = parts.shift.strip
      @params = DEFAULT_PARAMS.dup
      @video_w = DEFAULT_WIDTH
      @video_h = DEFAULT_HEIGHT
      
      parts.each do |part|
        if part.start_with?('@')
          @params['start'] = part[1..-1]
        elsif part.include?('x')
          @video_w, @video_h = part.split('x', 2).map { |dim| dim.empty? ? nil : dim.to_i }
        end
      end

      @video_w ||= DEFAULT_WIDTH
      @video_h ||= DEFAULT_HEIGHT
    end

    def render(context)
      style = "background-image: url('https://i.ytimg.com/vi/#{@video_id}/hqdefault.jpg');"
      style += " width: #{@video_w}px; height: #{@video_h}px;"

      params_attr = %( params="#{@params.map { |k,v| "#{k}=#{v}" }.join('&')}")

      <<~HTML
        <lite-youtube videoid="#{@video_id}"#{params_attr} style="#{style}">
          <button type="button" class="lty-playbtn">
            <span class="lyt-visually-hidden">Play Video: #{@video_id}</span>
          </button>
        </lite-youtube>
      HTML
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::LiteYouTubeEmbed)