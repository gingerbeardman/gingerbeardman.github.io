module Jekyll
  class NicovideoEmbed < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input.strip
    end

    def render(context)
      id = @input.split(' ').first

      <<~HTML
        <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://embed.nicovideo.jp/watch/#{id}?autoplay=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media *;"></iframe></div>
      HTML
    end
  end
end

Liquid::Template.register_tag('nicovideo', Jekyll::NicovideoEmbed)
