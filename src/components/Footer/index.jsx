import "./styles.css";

const Footer = () => {
  return (
    <footer>


      <div className="info-container">
     <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNDUuNDU4MTciIHkxPSIxNi40NTQ2NyIgeDI9IjEyNy40OTUiIHkyPSIxNDkuOTMwMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMV9CS0NRUGY4YmlXV3NfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZDg4NGQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwYTg1ZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBjeD0iODYuMDAyMjIiIGN5PSI1NS4xODU1NyIgcj0iMTQuMjkxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yX0JLQ1FQZjhiaVdXc19ncjIiPjxzdG9wIG9mZnNldD0iMC41MTYiIHN0b3AtY29sb3I9IiMwMDAwMDAiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDI4LjY2NjY3aC0xMjljLTMuOTU5NTgsMCAtNy4xNjY2NywzLjIwNzA4IC03LjE2NjY3LDcuMTY2Njd2OTMuMTY2NjdjMCwzLjk1OTU4IDMuMjA3MDgsNy4xNjY2NyA3LjE2NjY3LDcuMTY2NjdoMjguNjY2Njd2MjguNjU5NWMwLDMuMTkyNzUgMy44NTkyNSw0Ljc5MDkyIDYuMTE2NzUsMi41MzM0MmwzMS4xOTI5MiwtMzEuMTkyOTJoNjMuMDIzNjdjMy45NTk1OCwwIDcuMTY2NjcsLTMuMjA3MDggNy4xNjY2NywtNy4xNjY2N3YtOTMuMTY2NjdjMCwtMy45NTk1OCAtMy4yMDcwOCwtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N3oiIGZpbGw9InVybCgjY29sb3ItMV9CS0NRUGY4YmlXV3NfZ3IxKSI+PC9wYXRoPjxwYXRoIGQ9Ik03OC44MzMzMywxMjEuODMzMzNoMTQuMzMzMzNjMS45NzgsMCAzLjU4MzMzLC0xLjYwNTMzIDMuNTgzMzMsLTMuNTgzMzN2LTQzYzAsLTEuOTc4IC0xLjYwNTMzLC0zLjU4MzMzIC0zLjU4MzMzLC0zLjU4MzMzaC0xNC4zMzMzM2MtMS45NzgsMCAtMy41ODMzMywxLjYwNTMzIC0zLjU4MzMzLDMuNTgzMzN2NDNjMCwxLjk3OCAxLjYwNTMzLDMuNTgzMzMgMy41ODMzMywzLjU4MzMzeiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik03OS42NDY3NSwxMjAuMDQxNjdoMTIuNzEwMDhjMS40MzY5MiwwIDIuNjA1MDgsLTEuMTY0NTggMi42MDUwOCwtMi42MDUwOHYtNDEuMzczMTdjMCwtMS40MzY5MiAtMS4xNjQ1OCwtMi42MDUwOCAtMi42MDUwOCwtMi42MDUwOGgtMTIuNzEwMDhjLTEuNDM2OTIsMCAtMi42MDUwOCwxLjE2NDU4IC0yLjYwNTA4LDIuNjA1MDh2NDEuMzc2NzVjMCwxLjQzNjkyIDEuMTY0NTgsMi42MDE1IDIuNjA1MDgsMi42MDE1eiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wNyI+PC9wYXRoPjxlbGxpcHNlIGN4PSIyNCIgY3k9IjE1LjQwMiIgdHJhbnNmb3JtPSJzY2FsZSgzLjU4MzMzLDMuNTgzMzMpIiByeD0iMy45ODgiIHJ5PSIzLjYwOSIgZmlsbD0idXJsKCNjb2xvci0yX0JLQ1FQZjhiaVdXc19ncjIpIiBvcGFjaXR5PSIwLjE1Ij48L2VsbGlwc2U+PHBhdGggZD0iTTg2LDYzLjUzOTY3YzYuMDkxNjcsMCA5LjQ5NTgzLC0zLjgyNyA5LjQ5NTgzLC04LjU1N2MwLC00LjczIC0zLjU5NDA4LC04LjM5OTMzIC05LjQ5NTgzLC04LjM5OTMzYy01LjkwMTc1LDAgLTkuNDk1ODMsMy42NjkzMyAtOS40OTU4Myw4LjM5OTMzYzAsNC43MyAzLjQwNDE3LDguNTU3IDkuNDk1ODMsOC41NTd6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHJlY3QgeD0iMjIiIHk9IjIxIiB0cmFuc2Zvcm09InNjYWxlKDMuNTgzMzMsMy41ODMzMykiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PC9nPjwvZz48L3N2Zz4="/>
      <div className="info-card">
        <ul>
          <h2> NUESTRA TIENDA</h2>
          <li>
            Dirección: <span> Diaz Coronel Avda 1415</span>
          </li>

          <li>
            Teléfono: <span>+54 1149 63 9318</span>
          </li>
          <li>
            mai: <span>tienda@audiotech.com</span>
          </li>
          <li>
            Horarios: <span> L - S de 10:00h a 20:00h</span>
          </li>
        </ul>
      </div>

      <div className="info-card">
        <ul>
          <h2> ADMINISTRACIÓN</h2>
          <li>
            Telefono : <span>+54 1149 74 0049</span>
          </li>

          <li>
            mail: <span> administracion@audiotech.com</span>
          </li>
          <li>
            Horarios: <span> L - S de 10:00h a 20:00h</span>
          </li>
        </ul>
      </div>

      <div className="info-card">
        <ul>
          <h2> SERVICIO TÉCNICO</h2>
          <li>
            Télefono : <span>+54 1142 52 1719</span>
          </li>
          <li>
            mail: <span> servicios@audiotech.com</span>
          </li>
          <li>
            Horarios: <span> L - V de 08:00h a 14:00h</span>
          </li>
        </ul>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
