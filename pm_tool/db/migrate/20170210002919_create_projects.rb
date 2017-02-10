class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.text :title
      t.text :description
      t.date :due_date

      t.timestamps
    end
  end
end
