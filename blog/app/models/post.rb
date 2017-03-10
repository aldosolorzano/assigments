class Post < ApplicationRecord

  belongs_to :category
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user

  validates :title, presence: true
  validates :body, presence: true

  def liked_by?(user)
    likes.find_by(user: user).present?

  end
end
