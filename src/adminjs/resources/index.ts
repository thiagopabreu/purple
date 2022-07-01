import { categoryResourceOptions } from './category';
import { Category } from './../../models/Category';
import { ResourceWithOptions } from 'adminjs';
import { Course } from '../../models/Course';
import { courseResourceOptions } from './course';

export const adminjsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions
    }
]