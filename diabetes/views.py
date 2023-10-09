from pathlib import Path
from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth.models import User
import joblib


def index(request):
    return render(
        request,
        "diabetes/index.html",
    )


def about(request):
    return render(request, "diabetes/about.html")


def faq(request):
    return render(request, "diabetes/faqs.html")


def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            messages.success(request, "You are now logged in")
            return redirect("index")
        else:
            messages.error(request, "Invalid credentials")
            return redirect("login")
    else:
        return render(
            request,
            "diabetes/login.html",
        )


def signup(request):
    if request.method == "POST":
        # Get form values
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        password2 = request.POST["password2"]

        # Check if passwords match
        if password == password2:
            # Check username
            if User.objects.filter(username=username).exists():
                messages.error(request, "That username is taken")
                return redirect("signup")
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request, "That email is being used")
                    return redirect("signup")
                else:
                    # Looks good
                    user = User.objects.create_user(
                        username=username, password=password, email=email
                    )
                    # Login after signup
                    auth.login(request, user)
                    messages.success(request, "You are now logged in")
                    return redirect("index")
        else:
            messages.error(request, "Passwords do not match")
            return redirect("signup")
    else:
        return render(request, "diabetes/signup.html")


def resources(request):
    return render(
        request,
        "diabetes/resources.html",
    )


def hotline(request):
    return render(
        request,
        "diabetes/hotline.html",
    )


def diabetes_prediction(request):
    return render(request, "diabetes/diabetes-prediction.html")


def result(request):
    context = {}
    if request.method == "POST":
        pg = request.POST["pg"]
        gc = request.POST["gc"]
        bp = request.POST["bp"]
        st = request.POST["st"]
        ins = request.POST["ins"]
        bmi = request.POST["bmi"]
        dpf = request.POST["dpf"]
        age = request.POST["age"]

        BASE_DIR = Path(__file__).resolve().parent.parent
        model = joblib.load(BASE_DIR / "algorithm/algorithm/diabetes_prediction.joblib")
        input_data = [pg, gc, bp, st, ins, bmi, dpf, age]
        predictions = model.predict([input_data])

        if predictions[0] == 0:
            msg = "The person is is not diabetic"
        else:
            msg = "The person is diabetic"

        context = {"msg": msg}

    return render(request, "diabetes/result.html", context)


def logout(request):
    auth.logout(request)
    messages.success(request, "You are now logged out")
    return redirect("index")
