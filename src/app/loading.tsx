import { Spinner } from "@/components/ui/Spinner/Spinner";

export default function Loading() {
    return <div className="flex w-full justify-center items-center">
        <Spinner />
    </div>;
}