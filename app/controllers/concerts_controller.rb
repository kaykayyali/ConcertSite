
class ConcertsController < ApplicationController

	def show
		@comment = Comment.new
		@concert = Concert.find(params[:id])
		artists =  RSpotify::Artist.search(@concert.artist)
		@artist = artists[0]
		
		render 'show'
	end

	def upcoming
		@concerts_today = Concert.where(:date => Date.today)
		@concerts_upcoming = Concert.where('date >= ?', DateTime.now)
		.order("extract(day from date) ASC")
		
			render 'upcoming'
	end

	def new
		@concert = Concert.new
		render 'new'
	end

	def index
		@concerts = Concert.all
		render 'index'
	end

	def create
		
		@concert = Concert.new(concert_params)

		if @concert.save 
			flash[:notice] = "Added new concert!"
			redirect_to action: 'index', controller: 'concerts'
		else 
			flash[:alert] = "Creation Failed."
			render 'new'
		end
	end

	def home
		@concerts_today = Concert.where(:date => Date.today)
		@concerts_month = Concert.where('extract(month from date) = ?', Time.now.month).where('extract(year from date) = ?', Time.now.year).order("extract(day from date) ASC")
			render 'home'
	end
	

	def update

	end

	private
	def concert_params
		return params.require(:concert).permit(:venue, :description, :date, :ticket_price, :city, :artist)
	end
end
