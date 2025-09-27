interface SearchResultItem {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

/** This interface need only for dummyJSON usage.
 * For another source (real API or self-made Mock) its probably redundand*/
interface SearchResultPayload {
  recipes: SearchResultItem[];
  total: number;
  skip: number;
  limit: number;
}

export type { SearchResultPayload, SearchResultItem };
