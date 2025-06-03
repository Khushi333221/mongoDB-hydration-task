db.collection.aggregate([
  {
    $match: {
      timestamp: {
        $gte: ISODate("2025-05-27T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: null,
      totalWaterIntake: {
        $sum: "$amount"
      }
    }
  }
])
