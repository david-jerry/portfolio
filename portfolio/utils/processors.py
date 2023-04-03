import magic
import os
from io import BytesIO
from PIL import Image, ImageOps
from django.core.files import File
from django.core.cache import cache

from portfolio.utils.exceptions import CustomException
from portfolio.utils.logger import LOGGER


def OptimizeImage(image, name:str, size_h:int=None, size_w:int=None, resize:bool=False):
    """A mixin to optimize images for django either resizing or just droping the quality

    Args:
        image (object): an image object
        size_h (int): a predefined height for the image
        size_w (int): a predefined width for the image
        resize (bool): resize the image if the option to resize is given
    Raises:
        CustomException: _description_
    """
    # first check if the image exists or not
    size_h = size_h or 500
    size_w = size_w or 500

    if image is None:
        LOGGER.error("There is no image to optimize. Optimization failed.")
        raise CustomException("There is no image to optimize")
    else:
        # if image exists process it
        LOGGER.info(f"image path: {image}")
        image_path = image
        with Image.open(image_path) as img:
            img = img.convert('RGB')
            if resize:
                img.thumbnail((size_h, size_w), Image.ANTIALIAS) # resize the image to 500x500 pixels
            img = img.convert('RGB')
            image = ImageOps.exif_transpose(img)
            image_bytes = BytesIO()
            img.save(image_bytes, 'JPEG', optimize=True, quality=75) # save the resized image with quality of 80
            image_bytes.seek(0)
            cache.set(str(image_path), image_bytes.getvalue())
            image = File(image_bytes) # =filename)
            # image_key = image.name.split
            # name = name.replace(' ', '_')
            # cache.set('name', image)
            return image_bytes.getvalue()

        # # store the processed image in a redis cache
        # with open(image_path, 'rb') as f:
        #     image_data = f.read()
        #     cache.set(image_path, image_data)

        #     # Remove the original
        #     os.remove(image_path)


def check_task_result(task_result, instance):
    # wait for the task to complete and get the result
    task_result.wait()  # wait until the task is complete
    task_status = task_result.status  # get the task status
    task_result_value = task_result.result  # get the task result

    if task_status == 'SUCCESS':
        if task_result_value is None:
            instance.save()
            LOGGER.success("Processing succeeded.")
        else:
            LOGGER.error(task_result_value)
    else:
        LOGGER.error("Processing failed. Please try again later.")


