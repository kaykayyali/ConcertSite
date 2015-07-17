class CreateConcerts < ActiveRecord::Migration
  def change

      create_table :concerts do |t|
      	
      t.string :artist
  		t.datetime :date
  		t.string :venue 
  		t.string :city 
  		t.integer :ticket_price 
  		t.string :description

        t.timestamps null: false
      end
  end
end
