class CreateSleepRecord < ActiveRecord::Migration[5.2]
  def change
    create_table :sleep_records do |t|
      t.integer :user_id, null: false
      t.integer :duration
      t.boolean :finished, default: false

      t.timestamps
    end
  end
end
