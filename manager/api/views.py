# api/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json
from .models import Post
from django.utils import timezone
from django.shortcuts import render 

@csrf_exempt  
@require_POST 
def create_post(request):
    try:
       
        data = json.loads(request.body)
        post = Post(
            feedback_author=data['feedback_author'],
            feedback_text=data['feedback_text'],
            pub_date=timezone.now() 
        )
        post.save()  

        return JsonResponse({'message': 'Post criado com sucesso!'}, status=201)

    except KeyError:
        return JsonResponse({'error': 'Dados inválidos!'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def post_list(request):
    posts = Post.objects.all() 
    return render(request, 'api/post_list.html', {'posts': posts})