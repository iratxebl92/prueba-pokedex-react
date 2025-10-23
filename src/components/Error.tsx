type ErrorProps = {
  message?: string;
};

export const Error = ({
  message = "La página que buscas no existe o fue movida.",
}: ErrorProps) => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center p-6 text-center">

      <p className="text-6xl font-extrabold tracking-tight text-gray-900">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-gray-800">Página no encontrada</h1>
      <p className="mt-2 max-w-md text-gray-600">{message}</p>
      <div className="mt-6 flex items-center gap-3">
        <a href="/" className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Volver al inicio
        </a>
      </div>
    </div>
  );
};


