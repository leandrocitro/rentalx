


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    execute({ description, name }: IRequest ) {
        const CategoryAlreadyExists = categoriesRepository.findByName(name);

if (CategoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already exists!" })
}


categoriesRepository.create({name, description});
    }
}

export { CreateCategoryService }