class User < ApplicationRecord
  has_secure_password

  has_many :posts, dependent: :nullify
  has_many :comments, dependent: :nullify

  validates :first_name, presence: true
  validates :last_name, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :email, presence: true,
                    uniqueness: true,
                    format: VALID_EMAIL_REGEX

  def full_name
    "#{self.first_name} #{self.last_name}".strip.titleize
  end
end
