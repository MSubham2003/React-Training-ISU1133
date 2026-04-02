"use server";

export type Feedback = {
    id: number;
    name: string;
    message: string;
    rating: number;
};

let feedbackStore: Feedback[] = [{
    id: 1,
    name: "Subham",
    message: "Great application, very smooth experience!",
    rating: 5,
},
{
    id: 2,
    name: "Rahul",
    message: "UI looks clean but can improve performance.",
    rating: 4,
}]; // in-memory DB

export async function addFeedback(formData: FormData): Promise<Feedback> {
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;
    const rating = Number(formData.get("rating"));

    // simulate latency
    await new Promise((res) => setTimeout(res, 1000));

    const newFeedback: Feedback = {
        id: Date.now(),
        name,
        message,
        rating,
    };

    feedbackStore.push(newFeedback);

    return newFeedback;
}

export async function getFeedbacks(): Promise<Feedback[]> {
    return feedbackStore;
}