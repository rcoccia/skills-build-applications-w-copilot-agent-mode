from djongo import models

class User(models.Model):
    _id = models.ObjectIdField()
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=128)
    class Meta:
        db_table = 'users'

class Team(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    members = models.JSONField(default=list)
    class Meta:
        db_table = 'teams'

class Activity(models.Model):
    _id = models.ObjectIdField()
    user_email = models.EmailField()
    activity_type = models.CharField(max_length=50)
    duration = models.IntegerField()
    date = models.DateTimeField()
    class Meta:
        db_table = 'activity'

class Leaderboard(models.Model):
    _id = models.ObjectIdField()
    user_email = models.EmailField()
    points = models.IntegerField()
    class Meta:
        db_table = 'leaderboard'

class Workout(models.Model):
    _id = models.ObjectIdField()
    user_email = models.EmailField()
    workout_type = models.CharField(max_length=50)
    details = models.JSONField(default=dict)
    date = models.DateTimeField()
    class Meta:
        db_table = 'workouts'
