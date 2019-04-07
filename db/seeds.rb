# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{
  name: 'Marcelino Orn',
  email: 'Marcelino65@gmail.com',
}, {
  name: 'Ms. Verla Douglas',
  email: 'Verla70@yahoo.com',
}, {
  name: 'Mrs. Mariah Zboncak',
  email: 'Mariah22@yahoo.com',
}, {
  name: 'Destiny Breitenberg',
  email: 'Destiny75@yahoo.com',
}, {
  name: 'Adam Greenfelder',
  email: 'Adam_Greenfelder99@gmail.com',
}])

sleepRecord = SleepRecord.create([
  {
    user_id: 1,
    created_at: 'Sat, 30 Mar 2019 12:12:03 UTC +00:00',
    duration: 1000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Sun, 31 Mar 2019 12:12:03 UTC +00:00',
    duration: 2000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Mon, 01 Apr 2019 12:12:03 UTC +00:00',
    duration: 75000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Tue, 02 Apr 2019 12:12:03 UTC +00:00',
    duration: 45000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Wed, 03 Apr 2019 12:12:03 UTC +00:00',
    duration: 25000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Thu, 04 Apr 2019 12:12:03 UTC +00:00',
    duration: 2500,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Fri, 05 Apr 2019 12:12:03 UTC +00:00',
    duration: 38000,
    finished: true,
  }, {
    user_id: 1,
    created_at: 'Sat, 06 Apr 2019 12:12:03 UTC +00:00',
    duration: 40000,
    finished: true,
  }, {
    user_id: 1,
    created_at: 'Sun, 07 Apr 2019 12:12:03 UTC +00:00',
    duration: 1000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Mon, 08 Apr 2019 12:12:03 UTC +00:00',
    duration: 2000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Tue, 09 Apr 2019 12:12:03 UTC +00:00',
    duration: 1500,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Wed, 10 Apr 2019 12:12:03 UTC +00:00',
    duration: 10000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Thu, 11 Apr 2019 12:12:03 UTC +00:00',
    duration: 25000,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Fri, 12 Apr 2019 12:12:03 UTC +00:00',
    duration: 2500,
    finished: true,
  },  {
    user_id: 1,
    created_at: 'Sat, 13 Apr 2019 12:12:03 UTC +00:00',
    duration: 7000,
    finished: true,
  }, {
    user_id: 1,
    created_at: 'Sun, 14 Apr 2019 12:12:03 UTC +00:00',
    duration: 6000,
    finished: true,
  }, {
    user_id: 2,
    created_at: 'Sun, 07 Apr 2019 12:12:03 UTC +00:00',
    duration: 10000,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Mon, 08 Apr 2019 12:12:03 UTC +00:00',
    duration: 1000,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Tue, 09 Apr 2019 12:12:03 UTC +00:00',
    duration: 15000,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Wed, 10 Apr 2019 12:12:03 UTC +00:00',
    duration: 8000,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Thu, 11 Apr 2019 12:12:03 UTC +00:00',
    duration: 9000,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Fri, 12 Apr 2019 12:12:03 UTC +00:00',
    duration: 700,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Sat, 13 Apr 2019 12:12:03 UTC +00:00',
    duration: 5000,
    finished: true,
  },  {
    user_id: 2,
    created_at: 'Sun, 14 Apr 2019 12:12:03 UTC +00:00',
    duration: 4000,
    finished: true,
  },
])

