import { component$, Slot } from "@builder.io/qwik";

export const BlockStack = component$(() => {
    return (
        <div class="flex flex-col lg:flex-row gap-2 w-full">
            <Slot />
        </div>
    );
});