# Generated by Django 5.2.3 on 2025-06-28 08:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_amount_product_checked'),
        ('stocks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='StockListItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('is_purchased', models.BooleanField(default=False)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
                ('stock_list', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stocks.stocklist')),
            ],
            options={
                'unique_together': {('stock_list', 'product')},
            },
        ),
        migrations.AlterField(
            model_name='stocklist',
            name='products',
            field=models.ManyToManyField(related_name='stocklists', through='stocks.StockListItem', to='products.product'),
        ),
        migrations.DeleteModel(
            name='StockItem',
        ),
    ]
