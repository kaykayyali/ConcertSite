class Concert < ActiveRecord::Base
	
	has_many :comments
	validates 	:artist, presence: true
	validates	:date, presence: true
	validates	:venue, presence: true
	validates	:city, presence: true
	validates	:ticket_price,  presence: true, numericality: true
	
end
