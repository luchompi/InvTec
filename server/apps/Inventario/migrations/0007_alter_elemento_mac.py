# Generated by Django 4.2.2 on 2023-08-08 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0006_rename_tipo_elemento_modelo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='elemento',
            name='MAC',
            field=models.CharField(blank=True, error_messages={'unique': 'Ya existe un elemento con esta MAC'}, max_length=50, null=True, unique=True, verbose_name='MAC'),
        ),
    ]
