from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data.'

    def handle(self, *args, **kwargs):
        # Users
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        user1 = User.objects.create(email="alice@example.com", name="Alice", password="alicepass")
        user2 = User.objects.create(email="bob@example.com", name="Bob", password="bobpass")
        user3 = User.objects.create(email="carol@example.com", name="Carol", password="carolpass")

        # Teams
        team1 = Team.objects.create(name="Red Rockets", members=[user1.email, user2.email])
        team2 = Team.objects.create(name="Blue Blazers", members=[user3.email])

        # Activities
        Activity.objects.create(user_email=user1.email, activity_type="run", duration=30, date=timezone.now())
        Activity.objects.create(user_email=user2.email, activity_type="walk", duration=45, date=timezone.now())
        Activity.objects.create(user_email=user3.email, activity_type="strength", duration=20, date=timezone.now())


        # Leaderboard
        Leaderboard.objects.create(user_email=user1.email, points=100)
        Leaderboard.objects.create(user_email=user2.email, points=80)
        Leaderboard.objects.create(user_email=user3.email, points=120)

        # Workouts
        Workout.objects.create(user_email=user1.email, workout_type="cardio", details={"distance": 5}, date=timezone.now())
        Workout.objects.create(user_email=user2.email, workout_type="strength", details={"reps": 50}, date=timezone.now())
        Workout.objects.create(user_email=user3.email, workout_type="yoga", details={"duration": 60}, date=timezone.now())

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
