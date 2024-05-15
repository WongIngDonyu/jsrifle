import React from 'react';
function ErrorComponent ({error}) {
    return (
        <div className="error-message">
            <p>Ошибка: {error}</p>
        </div>
    );
}
export default ErrorComponent;
