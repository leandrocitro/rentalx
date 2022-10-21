import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";



interface IRequest {
    name: string;
    description: string;
}                                                                                                                                                                                                                                                                                                                                                                                                                   

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    execute({ description, name }: IRequest): void {
        
        const CategoryAlreadyExists = this.categoriesRepository.findByName(name);

if (CategoryAlreadyExists) {
    throw new Error("Category Already exists!")
        
}


this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryService }