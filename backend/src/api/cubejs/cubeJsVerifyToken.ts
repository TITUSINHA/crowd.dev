import CubeJsService from '../../services/cubejs/cubeJsService'

export default async (req, res) => {
  const payload = await CubeJsService.verifyToken(req.language, req.body.token, req.params.tenantId)
  await req.responseHandler.success(req, res, payload)
}
