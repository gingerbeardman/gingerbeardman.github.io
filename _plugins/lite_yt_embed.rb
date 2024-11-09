module Jekyll
  class YouTubeEmbed < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input.strip
    end

    def render(context)
      parts = @input.split(' ')
      
      # Initialize default values
      id = parts[0]
      aspect_ratio = '16/9'
      start_time = '0'
      
      # Process remaining arguments
      parts[1..-1].each do |part|
        if part.start_with?('@')
          # This is a timestamp
          start_time = part.gsub('@', '')
        elsif part.match?(%r{\d+/\d+})
          # This is an aspect ratio
          aspect_ratio = part
        end
      end

      <<~HTML
        <lite-youtube 
          style="aspect-ratio: #{aspect_ratio};" 
          videoid="#{id}" 
          params="start=#{start_time}&modestbranding=2">
        </lite-youtube>
      HTML
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTubeEmbed)