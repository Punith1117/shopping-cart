import { StyledErrorPage } from "./styles/ErrorPage.style"

function ErrorPage() {
    return (
        <StyledErrorPage className="error-page">
            <div className="error-message">
                Sorry :( This page doesn't exist
            </div>
        </StyledErrorPage>
    )
}

export default ErrorPage