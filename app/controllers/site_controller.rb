class SiteController < ApplicationController
	def index
		@lang = Language.first
		@classes = @lang.klasses
		@class = @classes.sample
		@methods = @class.meths
		if @methods
			@meth = @methods.sample
		else
			@meth = {description: "", signature: "", example: "", source: ""}
		end
	end
end


