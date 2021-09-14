export function RepositoryItem ({repository}) {
    console.log(repository);
    return(
        <li>
            <strong>{repository?.name ?? 'vazio'}</strong>
            <p>{repository?.description ?? 'vazio'}</p>

            <a href="">
            {repository?.html_url ?? '#'}
            </a>
            <hr />
        </li>
    );
}