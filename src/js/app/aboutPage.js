import { loadEmployees } from "../api/employees.js";
import { renderEmployeeCard } from "../ui/employeeCard.js";

export async function initAbout() {
    const list =
        document.querySelector(".team__list");

    const tpl =
        document.querySelector("#employee-card-tpl");

    const controller =
        new AbortController();

    try {
        const employees =
            await loadEmployees(6, {
                signal: controller.signal
            });

        const fragment =
            document.createDocumentFragment();

        for (const employee of employees) {
            fragment.append(
                renderEmployeeCard(tpl, employee)
            );
        }

        list.innerHTML = "";
        list.append(fragment);

    } catch (error) {
        console.error(
            "Помилка завантаження співробітників:",
            error
        );
    }

    return () => controller.abort();
}