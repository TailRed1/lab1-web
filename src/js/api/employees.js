export async function loadEmployees(
    limit = 6,
    { signal } = {}
) {
    const url =
        `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;

    const res = await fetch(url, { signal });

    if (!res.ok) {
        throw new Error(
            `HTTP ${res.status}: ${res.statusText}`
        );
    }

    const users = await res.json();

    return users.map((user) => ({
        id: user.id,

        name: user.name,

        role:
            user.company?.catchPhrase ??
            "Team member",

        photo:
            `https://picsum.photos/seed/${user.id}/600/400`,

        profile:
            `https://jsonplaceholder.typicode.com/users/${user.id}`
    }));
}