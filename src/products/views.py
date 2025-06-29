from django.views.generic import ListView, CreateView, DeleteView, UpdateView
from .models import Product
from .forms import ProductForm, ProductEditForm
from django.urls import reverse_lazy

class ProductListView(ListView):
    model = Product
    template_name = 'product_list.html'
    context_object_name = 'products'

class ProductCreateView(CreateView):
    model = Product
    form_class = ProductForm
    template_name = 'product_create.html'
    success_url = reverse_lazy('product_create')

class ProductDeleteView(DeleteView):
    model = Product
    template_name = 'product_delete.html'
    success_url = reverse_lazy('products')

class ProductEditView(UpdateView):
    model = Product
    form_class = ProductEditForm
    template_name = 'product_edit.html'
    success_url = reverse_lazy('products')
